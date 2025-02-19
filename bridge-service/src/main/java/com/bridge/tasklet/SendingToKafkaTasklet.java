package com.bridge.tasklet;

import com.bridge.model.dto.EventDto;
import com.bridge.service.KafkaProducer;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class SendingToKafkaTasklet implements Tasklet{

    private final KafkaProducer kafkaProducer;

    @Override
    public RepeatStatus execute(@NonNull StepContribution contribution, ChunkContext chunkContext) {
        List<EventDto> eventDtoList = (List<EventDto>) chunkContext.getStepContext().getStepExecution()
                .getJobExecution().getExecutionContext().get("eventDtoList");

        for (EventDto eventDto : eventDtoList) {
            log.info("Sending event to kafka: {}", eventDto);
            kafkaProducer.sendEventDto(eventDto);
        }

        return RepeatStatus.FINISHED;
    }

}
