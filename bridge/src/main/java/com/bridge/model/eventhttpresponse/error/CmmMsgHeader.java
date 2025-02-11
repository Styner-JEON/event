package com.bridge.model.eventhttpresponse.error;

import lombok.Getter;

@Getter
public class CmmMsgHeader {

    private String errMsg;

    private String returnAuthMsg;

    private Integer returnReasonCode;

}
