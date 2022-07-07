package com.ironhack.websocket.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebSocketChatController {

    @MessageMapping("/resume")
    @SendTo("/start/initial")

    public String chat(String msg) {
        System.out.println(msg);
        return msg;
    }

}
