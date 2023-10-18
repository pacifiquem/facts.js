import fetchFacts from "../index";
import { expect, it, test } from "vitest";

test("Fetch Data Function", () => {
    it("Should return 1 fact by default", async () => {
        const facts = await fetchFacts();
        expect(facts).toHaveLength(1);
    });

    it("Should return number of specified facts", async () => {
        const facts = await fetchFacts({limit: 10});
        expect(facts).toHaveLength(10);
    });
});