import styled from "styled-components";

import { MaxWidthWrapper } from "./MaxWidthWrapper";
import BillingInformation from "./BillingInformation";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewOrder } from "../services/apiOrder";
import toast from "react-hot-toast";

function CheckoutDetail() {
  const { register, handleSubmit, watch, reset } = useForm();

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: createNewOrder,
    onSuccess: () => {
      toast.success("Order successfully created");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      reset();
    },
    onError: toast.error("Something went wrong"),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <h1>Checkout</h1>
      <Main>
        <div>
          <BillingInformation register={register} />
          <PaymentMethod register={register} watch={watch} />
        </div>
        <OrderSummary handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  & h1 {
    margin-block: 50px;
    font-size: 30px;
  }
`;

const Main = styled.div`
  display: flex;
  gap: 30px;

  & div {
    flex: 1;
  }

  & > div:last-of-type {
    border: 1px solid var(--clr-dark-15);
    margin-block-end: 30px;
    max-width: 407px;
    align-self: flex-start;
  }
`;

export default CheckoutDetail;
