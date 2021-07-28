import React from "react";
import styled from "styled-components";
export default function Home() {
    return (
        <Container>
            <div>
                <Image
                    src="https://images.unsplash.com/photo-1599277100479-3252d492a19a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJpbmclMjBjYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="plant"
                />
                <div className='purpose'>
                    <h2>What we do</h2>
                <p>
                    Love plants but hate the pesky watering schedule? No worries "Water My Plants" is here to help. 
                </p>
                <p>Add your plant's name, species, image and waterting schedule</p>
                <p> and we'll help you remember to water on time</p>
                </div>

            </div>
        </Container>
    );
}

const Image = styled.img`
  border: 1px solid black;
  margin: 3%;
  height: 60vh;
  width: 90%;
  border-radius: 50%;

  `;

const Container = styled.div`
/*  */
`;
