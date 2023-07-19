import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin:0;
  font-weight: normal;
  font-size: 3rem;
`;

const Desc = styled.p`
  color:#aaa;
  font-size: .8rem;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 40px;
  img{
    max-width: 100%;
  }
  div{
    align-items: center;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;
export default function Featured({product}) {
    return (
        <Bg>
            <Center>
                <ColumnWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>
                                {product.description}
                            </Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read More</ButtonLink>
                                <Button primary size="l">

                                    Add To Cart
                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://lcdn.altex.ro/resize/media/catalog/product/M/a/2bd48d28d1c32adea0e55139a4e6434a/MacBook_Air_Blush-1.jpg" alt="" />
                    </Column>
                </ColumnWrapper>

            </Center>
        </Bg>
    );
}