<template>
  <div id="sponsors-page">
    <div id="contact">
      <h1>Sponsors</h1>
      <hr />
      <p>
        Would you like to join our family of sponsors and supporter?
        <br />
        <br />
        Below is a list of our 2016-2017 sponsors and supporters. Please contact
        Jordan Zhang,
        <br />
        Vice President of Sponsorship at
        <a href="url">jordan.zhang@uwenactus.com</a>
        to obtain a copy of the
        <br />
        sponsorship package.
        <br />
        <br />
        Thank you for your support!
      </p>
    </div>
    <div id="our-sponsors">
      <img
        alt="Accounting Endowment Fund"
        src="../assets/Accounting_Endowment_Fund.png"
        class="sponsor"
      />
    </div>
  </div>
</template>

<style lang="scss">
hr {
  width: 50vw;
  // color: black;
  background-color: black;
  border: none;
  height: 2px;
}

#contact {
  background-color: #fec222;
  padding: 5vh 0;
  color: black;
}

#sponsors-page {
  display: flex;
  flex-direction: column;
}

#our-sponsors {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;

  .sponsor {
    width: 20vw;
  }
}
</style>
