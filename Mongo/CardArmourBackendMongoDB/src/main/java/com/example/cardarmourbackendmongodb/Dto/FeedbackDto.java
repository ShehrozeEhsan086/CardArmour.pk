package com.example.cardarmourbackendmongodb.Dto;

import com.example.cardarmourbackendmongodb.Model.Feedback;

import java.util.List;

public class FeedbackDto {

    private String username;
    private List<Feedback> feedback;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Feedback> getFeedback() {
        return feedback;
    }

    public void setFeedback(List<Feedback> feedback) {
        this.feedback = feedback;
    }
}