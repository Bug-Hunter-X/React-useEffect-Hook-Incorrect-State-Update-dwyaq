```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to update state based on previous state
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```