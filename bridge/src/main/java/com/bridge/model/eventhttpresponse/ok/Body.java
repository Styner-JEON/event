package com.bridge.model.eventhttpresponse.ok;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class Body {

    Integer numOfRows;

    Long pageNo;

    Long totalCount;

    @JsonProperty("items")
    private Items items;

}
