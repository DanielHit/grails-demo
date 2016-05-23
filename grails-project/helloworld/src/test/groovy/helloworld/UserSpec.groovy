package helloworld

import grails.test.mixin.TestFor
import org.junit.Test

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(User)
class UserSpec extends GroovyTestCase {


    void "test something"() {
        expect: "fix me"
        true == true
    }

    @Test
    void testName() {
        assertTrue(1 == 2)
    }
}
