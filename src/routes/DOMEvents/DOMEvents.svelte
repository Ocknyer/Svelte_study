<script>
  let m = { x: 0, y: 0 };
  let c = "deeppink";

  function handleMouseMove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  function handleClick() {
    alert('no more alerts');
  }
</script>

<div on:mousemove={handleMouseMove}>
  The mouse position is {m.x} x {m.y};
</div>

<!-- 인라인으로 이벤트 핸들러 선언하기 -->
<div
  on:mouseover={e => c = "indigo"}
  on:focus={e => c = "indigo"}
  on:mouseout={e => c = "deeppink"}
  on:blur={e => c = "deeppink"}
  style="background-color: {c}"
  class="bc_test"
>
  The background color is {c}
</div>

<!-- once 수정자는 한 번만 실행 가능하게 함 -->
<button on:click|once={handleClick}>
  Click me
</button>

<style>
  div {
    width: 100%;
    height: 100%;
  }

  .bc_test {
    width: 100%;
    height: 100%;
  }
</style>