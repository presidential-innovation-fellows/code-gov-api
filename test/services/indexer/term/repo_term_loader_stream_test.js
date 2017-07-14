const RepoTermLoaderStream = require("../../../../services/indexer/term/repo_term_loader_stream");
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;

describe("RepoTermLoaderStream", () => {
  let termIndexerMock = {
    logger: {
      info: function() {}
    }
  };

  describe("#_transform", () => {
    it("does not raise an error when passed a repo with an undefined or null term", (done) => {
      let repo = {
        "name": "frog",
        "agency.name": undefined,
        "agency.acronym": null
      };
      let repoTermLoaderStream = new RepoTermLoaderStream(termIndexerMock);
      repoTermLoaderStream._transform(repo, null, done);
    });
  });
});
