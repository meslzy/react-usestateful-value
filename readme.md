# use stateful value (✨)

> useState with stateful default value reflect to component changes using the useEffect

---

<div align="center">

![license](https://badgen.net/badge/license/MIT/blue)
![downloads](https://badgen.net/npm/dt/react-usestateful-value)
![issues](https://badgen.net/github/issues/meslzy/react-usestateful-value)

</div>

---

## Getting Started (✅)

- ### Installation (⏬)
  - `npm install react-usestateful-value`

- ### Importing (⚙️)
  - ```typescript jsx
    import useStatefulValue from "react-usestateful-value";
    ```

- ### How to use (❓)

```typescript jsx
import * as react from "react";
import useStatefulValue from "react-usestateful-value";

class Component extends react.Component {
	state = {
		message: "hi",
	};

	renderFunctionComponent = () => {
		const [message, setMessage] = useStatefulValue<string>(this.state.message);

		const onblur = () => {
			this.setState({
				message
			});
		};

		return (
			<div>
				<input type="text" value={message} onChange={(e) => setMessage(e.target.value)} onBlur={onblur}/>
			</div>
		);
	};

	render() {
		return (
			<div>
				<p>{this.state.message}</p>
				<this.renderFunctionComponent/>
			</div>
		);
	}
}
```

---

## The End (💘)
