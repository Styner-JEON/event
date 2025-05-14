package com.content.mapper;

import com.content.model.dto.EventDto;
import com.content.model.dto.EventListDto;
import com.content.model.entity.CommentEntity;
import com.content.model.entity.EventEntity;
import com.content.model.request.CommentRequest;
import com.content.model.response.CommentListResponse;
import com.content.model.response.EventListResponse;
import com.content.model.response.EventResponse;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EventMapper {

    EventEntity toEventEntity(EventDto dto);

    EventDto toEventDto(EventEntity entity);

    EventResponse toEventResponse(EventDto dto);

    EventListDto toEventListDto(EventEntity entity);

    EventListResponse toEventListResponse(EventListDto dto);

}
