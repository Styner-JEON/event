package com.bridge.tasklet;


import com.bridge.model.dto.EventDto;
import com.bridge.service.PublicDataApiClient;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class AreaBasedListFetchingTasklet implements Tasklet {

    private final PublicDataApiClient publicDataApiClient;

    @Override
    public RepeatStatus execute(@NonNull StepContribution contribution, @NonNull ChunkContext chunkContext) {
        int pageNo = 1;
        List<EventDto> eventDtoList = new ArrayList<>();
        while (publicDataApiClient.setAreaBasedList(pageNo, eventDtoList)) {
            pageNo++;
        }

        chunkContext.getStepContext().getStepExecution()
                .getJobExecution().getExecutionContext().put("eventDtoList", eventDtoList);

        return RepeatStatus.FINISHED;
    }

}
