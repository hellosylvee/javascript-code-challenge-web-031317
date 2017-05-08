class CommentList {
  constructor(commentsArray) {
    this.commentArray = null;
  }

  render() {
    return `<ul>` + this.commentsArray `</ul>`
  }

  addComment(string) {
    const newComment = new Comment(string);
    this.commentArray.push(newComment);
  }
}
