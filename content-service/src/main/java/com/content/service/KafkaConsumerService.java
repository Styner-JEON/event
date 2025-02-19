package com.content.service;

import com.content.model.dto.EventDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class KafkaConsumerService {

    @Value("${spring.kafka.topic}")
    private String topic;

    @Value("${spring.kafka.consumer.group-id}")
    private String groupId;

    @KafkaListener(topics = "${spring.kafka.topic}", groupId = "${spring.kafka.consumer.group-id}")
    public void consumeEvent(EventDto eventDto) {
        log.info("topic: {}", topic);
        log.info("groupId: {}", groupId);
        log.info("Consumed event: {}", eventDto);
    }

}

