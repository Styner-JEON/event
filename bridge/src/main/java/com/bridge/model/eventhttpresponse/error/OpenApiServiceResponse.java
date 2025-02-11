package com.bridge.model.eventhttpresponse.error;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;

@Getter
public class OpenApiServiceResponse {

    @JacksonXmlProperty(localName = "cmmMsgHeader")
    private CmmMsgHeader cmmMsgHeader;

}
