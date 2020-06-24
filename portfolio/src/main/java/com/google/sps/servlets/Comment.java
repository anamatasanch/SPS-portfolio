package comments;

public class Comment {
  long id;
  String text;
  String timestamp;

  public Comment(long id, String text, String timestamp){
    this.id = id;
    this.text = text;
    this.timestamp = timestamp;
  }
}
