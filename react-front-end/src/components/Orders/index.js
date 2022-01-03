import { useData } from "./../../contexts/commonData";
const Orders = () => {
  const { orders } = useData();
  return <>{JSON.stringify(orders)}</>;
};

export default Orders;
