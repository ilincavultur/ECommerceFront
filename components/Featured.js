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
`

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
                                <ButtonLink href={'/products/' + product._id} outline={1} white={1} size="l">Read More</ButtonLink>
                                <Button primary size="l">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                    </svg>
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