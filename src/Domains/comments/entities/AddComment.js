class AddComment {
  constructor(payload) {
    this._verifyPayload(payload);

    this.threadId = payload.threadId;
    this.content = payload.content;
    this.owner = payload.owner;
  }

  _verifyPayload(payload) {
    const { threadId, content, owner } = payload;

    if (!threadId || !content || !owner) {
      throw new Error('ADD_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof threadId !== 'string' || typeof content !== 'string' || typeof owner !== 'string') {
      throw new Error('ADD_COMMENT.NOT_MEET_DATA_TYPE_SPESIFICATION');
    }
  }

}

module.exports = AddComment;
