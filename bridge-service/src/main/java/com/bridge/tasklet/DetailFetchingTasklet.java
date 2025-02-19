package com.bridge.tasklet;

import com.bridge.model.dto.EventDto;
import com.bridge.service.PublicDataApiClient;
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
public class DetailFetchingTasklet implements Tasklet {

    private final PublicDataApiClient publicDataApiClient;

    @Override
    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) {
        List<EventDto> eventDtoList = (List<EventDto>) chunkContext.getStepContext().getStepExecution()
                .getJobExecution().getExecutionContext().get("eventDtoList");

        for (EventDto eventDto : eventDtoList) {
            publicDataApiClient.setDetailCommon(String.valueOf(eventDto.getContentId()), eventDto);
            publicDataApiClient.setDetailIntro(String.valueOf(eventDto.getContentId()), eventDto);
        }

        return RepeatStatus.FINISHED;
    }

}

