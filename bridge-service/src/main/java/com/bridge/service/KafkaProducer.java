package com.bridge.service;

import com.bridge.exception.KafkaSendingException;
import com.bridge.model.dto.EventDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaProducer {

    private final KafkaTemplate<String, EventDto> kafkaTemplate;

    @Value("${spring.kafka.topic}")
    private String topic;

    @Value("${spring.kafka.timeout-seconds}")
    private long timeoutSeconds;

    public void sendEventDto(EventDto eventDto, int retryCount) {
        SendResult<String, EventDto> sendResult = null;
        try {
            sendResult = kafkaTemplate
                    .send(topic, eventDto)
                    .get(timeoutSeconds, TimeUnit.SECONDS);
            RecordMetadata metadata = sendResult.getRecordMetadata();
            log.info("Retry {}: Kafka message sent successfully. Topic: {}, Partition: {}, Offset: {}, contentId: {}",
                    retryCount, metadata.topic(), metadata.partition(), metadata.offset(), eventDto.getContentId()
            );
        } catch (TimeoutException | ExecutionException | InterruptedException e) {
            throw new KafkaSendingException(String.format("Kafka message sending failed (contentId: %s): %s", eventDto.getContentId(), e.getMessage()));
        }
    }

}
