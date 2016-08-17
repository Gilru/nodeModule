


describe("Counter",function () {
    var element;

    beforeEach(function () {
        const injector = angular.injector(['myApp']);
        injector.invoke(function ($rootScope,$compile) {
            var root = $rootScope.$new();
            element = $compile("<counter-click></counter-click>")(root);


            root.$digest();


        })
    })



    it("it should increment when clicked",function () {
        // element.find("div").click();
        assert.equal(element.text(),"the counter is 0");
        element.find("h1").click();
        assert.equal(element.text(),"the counter is 1");



    })
})