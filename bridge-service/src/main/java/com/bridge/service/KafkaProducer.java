package com.bridge.service;

import com.bridge.model.dto.EventDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaProducer {

    private final KafkaTemplate<String, EventDto> kafkaTemplate;

    @Value("${spring.kafka.topic}")
    private String topic;

    public void sendEventDto(EventDto eventDto) {
        kafkaTemplate.send(topic, eventDto);
    }

}
