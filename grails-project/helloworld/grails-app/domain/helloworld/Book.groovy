package helloworld

class Book {

    static constraints = {

        name(blank: false, nullable: true, maxSize: 5)
        price(validator: {
            p -> p > 1.0 && p < 100
        })

        start(min: (new Date()).plus(-5))   // 使用groovy的语法进行操作 进行最小值限定
        title(inList: ["fuck", "hello"])
        email(email: true)
        password(password: true)
        age(min: 1, max: 100, validator: {
            p -> p % 2 == 0
        })
    }

    static belongsTo = [User]

    def String name
    def double price
    def Date start
    def String title
    def String email
    def String password
    def int age
}
