package comments;

public class Comment {
  private final long id;
  private final String text;
  private final long datePosted;

  public Comment(long id, String text, long datePosted){
    this.id = id;
    this.text = text;
    this.datePosted = datePosted;
  }
}
