package com.content.service;

import com.content.exception.EventException;
import com.content.mapper.EventMapper;
import com.content.model.dto.EventDto;
import com.content.model.entity.EventEntity;
import com.content.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class EventService {

    private final EventMapper eventMapper;

    private final EventRepository eventRepository;

    private final ImageService imageService;

    @Transactional
    public void insertEvent(EventDto eventDto) {
        EventEntity eventEntity = eventMapper.toEventEntity(eventDto);
        eventEntity.setDbUpdatedAt(LocalDateTime.now());
        imageService.processImages(eventDto);
        eventRepository.save(eventEntity);
        log.info("DB insert completed for contentId: {}", eventDto.getContentId());
    }

    @Transactional(readOnly = true)
    public Page<EventDto> selectEventList(Pageable pageable) {
        Page<EventDto> EventListPage = eventRepository.findAll(pageable).map(eventMapper::toEventDto);
        return EventListPage;
    }

    @Transactional(readOnly = true)
    public EventDto selectEvent(Long contentId) {
        EventEntity eventEntity = eventRepository.findById(contentId)
                .orElseThrow(() -> new EventException("Event not found with contentId: " + contentId)
        );
        return eventMapper.toEventDto(eventEntity);
    }

}
