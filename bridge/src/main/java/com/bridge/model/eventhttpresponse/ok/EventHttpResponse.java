package com.bridge.model.eventhttpresponse.ok;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class EventHttpResponse {

    @JsonProperty("response")
    private Response response;

}