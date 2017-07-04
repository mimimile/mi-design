<template>
    <div>
        <Row :gutter="16">
            <Col span="8">
                <div class="col" >col-8</div>
            </Col>
            <Col span="8">
                <div class="col">col-8</div>
            </Col>
        </Row>
    </div>
</template>



<style scoped>
.col {
    background-color: red;
    color: #fff;
}
</style>