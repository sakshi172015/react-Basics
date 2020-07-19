import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
        //setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        /*
        function doSomething() {
            console.log(someProp)
        }
        */
       //use someProps as dependeny in above case

        return () => {
            clearInterval(interval)
        }
    }, [count]) //either do this or line 8//way to let react know of everthing about chnages not just dependencies
    //if [], it ignore watching for changes to count

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter


/*

useEffect(() => {
    document.title = `You clicked ${count} times`
})

const [jsOnline, setJsOnline] = useState(null);
useEffect(() => {
    function handleStatusChange(status) {
        setJsOnline(status.isOnline);
    }

    ChatAPI.sunscribeToFriendsStatus(props.friend.id, handleStatusChange);
    return () => {
        ChatAPI.sunscribeFromFriendStatus(props.friend.id, handleStatusChange);

    }

})
*/
//do this when using multiple useEffect