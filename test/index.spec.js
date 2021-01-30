import { expect, server, BASE_URL } from "./setup";
import authorData from "../src/data/authorData";

describe("Index page test", () => {
  it("/ GET base URL", (done) => {
    server
      .get(`${BASE_URL}`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.be.a("string");
        expect(res.body.message).to.equal("My Rule-Validation API");
        expect(res.body.status).to.be.a("string");
        expect(res.body.status).to.equal("success");
        expect(res.body.data).to.be.a("object");
        expect(res.body.data).to.eql(authorData[0]);
        done();
      });
  });
});
