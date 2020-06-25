package comments;

public class Comment {
  long id;
  String text;
  String datePosted;

  public Comment(long id, String text, String datePosted){
    this.id = id;
    this.text = text;
    this.datePosted = datePosted;
  }
}
