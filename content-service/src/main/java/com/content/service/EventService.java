package com.content.service;

import com.content.mapper.EventMapper;
import com.content.model.dto.EventDto;
import com.content.model.entity.EventEntity;
import com.content.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class EventService {

    private final EventMapper eventMapper;

    private final EventRepository eventRepository;

    private final ImageService imageService;

    public void insertEvent(EventDto eventDto) {
        EventEntity eventEntity = eventMapper.toEventEntity(eventDto);
        eventEntity.setDbUpdatedAt(LocalDateTime.now());
        imageService.processImages(eventDto);
        eventRepository.save(eventEntity);
        log.info("DB insert completed for contentId: {}", eventDto.getContentId());
    }

}
