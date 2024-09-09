import Container from "../components/Container"

function TestPage() {

    return (
        <Container className="h-screen bg-purple-500">
            <h1>Test page</h1>
            <div className="flex justify-between items-center bg-primaryColor">
                <h2>Hello</h2>
                <h2>World</h2>
            </div>
        </Container>
    )

}

export default TestPage