package com.google.sps;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import comments.Comment;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;

@RunWith(JUnit4.class)
public final class PortfolioTests {

  @Test
  public void testCommentInDs() {
    String comment = "This is a test";
    long datePosted = 10;

    Entity commentEntity = new Entity("Test");
    commentEntity.setProperty("text", comment);
    commentEntity.setProperty("datePosted", datePosted);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(commentEntity);

    Query query = new Query("Test");
    PreparedQuery results = datastore.prepare(query);

    for (Entity entity : results.asIterable()) {
      long id = entity.getKey().getId();
      String text = (String) entity.getProperty("text");
      long newDatePosted = (long) entity.getProperty("datePosted");

      Assert.assertEquals(text, comment);
      Assert.assertEquals(newDatePosted, datePosted);
      datastore.delete(entity.getKey());
    }


  }
}
