package com.ssafy.project.common.exception;

import com.ssafy.project.controller.ReferenceController;
import com.ssafy.project.controller.TestController;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdvice {
    
    @ExceptionHandler(Exception.class)
    public String AllExceptionAdvice(Exception exception){
        return "Error Occoured.";
    }
}
