import styled from "styled-components";

function ProductDetailMainDesc() {
  return (
    <Wrapper>
      <p>
        Home is where the heart is, and your decor should reflect your
        personality and create a welcoming atmosphere. Whether you’re moving
        into a new place or just looking to refresh your existing space, there
        are countless ways to infuse style and comfort into your home. Here are
        some tips to elevate your decor and make your home feel uniquely yours.
      </p>
      <h3>1. Choose a Color Palette</h3>
      <p>
        The first step in creating a cohesive look is selecting a color palette.
        Start with a base color and then choose complementary hues. Soft
        neutrals can create a calming environment, while bold colors can add
        vibrancy. Consider the mood you want to create in each room; for
        instance, soft blues and greens are perfect for bedrooms, while warm
        reds and yellows can energize a living room.
      </p>
      <h3>2. Mix Textures</h3>
      <p>
        Incorporating a variety of textures adds depth and interest to your
        decor. Combine smooth, sleek surfaces with rougher materials. Think of a
        plush velvet sofa paired with a rustic wooden coffee table, or a soft
        knit throw draped over a leather chair. Textures can also be introduced
        through decorative pillows, rugs, and curtains, creating a layered look
        that feels inviting.
      </p>
      <h3>3. Incorporate Personal Touches</h3>
      <p>
        Your home should tell your story. Incorporate personal items that
        reflect your interests and experiences, such as framed photographs,
        travel souvenirs, or handcrafted art pieces. Displaying these items not
        only adds character to your space but also creates conversation starters
        for guests.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export default ProductDetailMainDesc;
