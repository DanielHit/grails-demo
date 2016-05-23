package helloworld

class User {

    static constraints = {
        name(blank: false, null: false, minSize: 2)
        password(password: true)
    }

    // fast and rapid
    static hasMany = [books: Book]
    String name
    String password

    @Override
    public String toString() {
        return name;
    }
}
