import grails.util.GrailsUtil
import helloworld.Book

class BootStrap {

    def init = { servletContext ->

        if (GrailsUtil.isDevelopmentEnv()) {
            println "test env"
            def user = new Book(
                    name: "daniel",
                    price: 23,
                    age: 2,
                    start: (new Date()),
                    title: "fuck",
                    email: "few@3.com",
                    paid: true
            )

            // GROM 为什么保存总是有问题
            user.save(flush: true)
        }

    }
    def destroy = {
    }
}
