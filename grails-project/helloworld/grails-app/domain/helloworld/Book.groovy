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
        age(inList: [1, 2, 3])
        paid()
    }

    static belongsTo = [user: User]

    def String name
    def double price
    def Date start
    def String title
    def String email
    def int age
    def boolean paid


    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Book{");
        sb.append("name='").append(name).append('\'');
        sb.append(", price=").append(price);
        sb.append('}');
        return sb.toString();
    }
}
