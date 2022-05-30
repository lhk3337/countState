const INCREMENT = "counter/INCREMENT";
const DECREMENT = "count/DECREMENT";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export default function Counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
