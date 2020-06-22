package com.google.sps.servlets;

public class Comment {
  long id;
  String text;
  String timestamp;

  public Comment(){
  }

  public Comment(long id, String text, String timestamp){
    this.id = id;
    this.text = text;
    this.timestamp = timestamp;
  }
}
