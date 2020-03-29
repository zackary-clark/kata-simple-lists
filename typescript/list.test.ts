import List from "./list";

describe("List", () => {
    let list: List;

    describe("find", () => {
        beforeEach(() => {
            list = new List();
        });

        it("should return undefined if given string is not in list", () => {
            expect(list.find("fred")).toBe(undefined);

            list.add("fred");

            expect(list.find("wilma")).toBe(undefined);
        });

        it("should return node containing given string if it is in list", () => {
            list.add("fred");
            list.add("wilma");
            
            expect(list.find("fred").value()).toBe("fred");
            expect(list.find("wilma").value()).toBe("wilma");
        });
    });
    
    describe("values", () => {
        it("should return array of all values in list", () => {
            list = new List();
            
            expect(list.values()).toStrictEqual([]);
            
            list.add("fred");
            list.add("wilma");
            list.add("betty");
            list.add("barney");
            
            expect(list.values()).toStrictEqual(["fred", "wilma", "betty", "barney"]);
        });
    });

    describe("delete", () => {
        it("should remove node from the list", () => {
            list = new List();

            list.add("fred");
            list.add("wilma");
            list.add("betty");
            list.add("barney");
            
            expect(list.values()).toStrictEqual(["fred", "wilma", "betty", "barney"]);

            list.delete("wilma");

            expect(list.values()).toStrictEqual(["fred", "betty", "barney"]);
            expect(list.find("wilma")).toBe(undefined);

            list.delete("barney");
            list.delete("fred");

            expect(list.values()).toStrictEqual(["betty"]);
            expect(list.find("fred")).toBe(undefined);

            list.delete("betty");

            expect(list.values()).toStrictEqual([]);
        });

        it("should not fail when list is empty", () => {
            list = new List();

            list.delete("fred");
        });
    });
});
