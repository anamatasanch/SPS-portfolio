package comments;

public class Comment {
  private final long id;
  private final String text;
  private final String datePosted;

  public Comment(long id, String text, String datePosted){
    this.id = id;
    this.text = text;
    this.datePosted = datePosted;
  }
}
