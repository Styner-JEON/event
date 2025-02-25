package com.content.mapper;

import com.content.model.dto.EventDto;
import com.content.model.entity.EventEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EventMapper {

    EventEntity toEventEntity(EventDto dto);

}
