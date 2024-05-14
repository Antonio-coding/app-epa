
export default function InClass() {
    return (
        <>
            <div>this is the class there you are subscribe </div>
            <button type="button" className=" bg-primary-blue ">Click me</button>

            <ul>
                {/* map through array and create list items */}
                {/* useEffect to run code when component mounts or updates */}
                {/*               
                if we want to run a piece of code only once, we can pass an empty dependency array as the second argument in useEffect.
                - useState hook returns an array with two values: a piece of state, and a function to update it.
                useState: hook that allows us to manage state in our functional components. It returns an array with two values, the current state value and
                - useState hook returns a pair: a piece of state, and a function that lets you update it.
                    - every time we call this function, React will re-render the component with the      new value
                  The "useState" hook is used to declare a new state variable in the functional component.
                  It also automatically subscribes your component to any re-renders when the state changes.
              */}
            </ul>
        </>
    )
}