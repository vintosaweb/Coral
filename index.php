<?php
  include_once("data.php");
  include("include/header.php");
?>

<?php foreach ($tours as $k => $c): ?>
<div class="title_country"><?php echo $k ?></div>
<div class="b-tours">
<?php foreach ($c as $k => $c): ?>
  <div class="b-anounce">
    <a target="_blank" href="<?php echo $c['link'] ?>">
      <img src="photos/<?php echo $c['anounce'] ?>" alt="" />
      <div class="data">
        <div class="name"><?php echo $c['hotel'] ?></div>
        <div class="place"><?php echo $c['country'] ?> / <?php echo $c['region'] ?></div>
        <div class="other">Заезд <?php echo $c['date'] ?> | <?php echo $c['night'] ?> ночей | <?php echo $c['eat'] ?></div>
        <div class="price"><span>от</span> <?php echo $c['price'] ?> руб.</div>
      </div>
     </a>
    <div class="clear"></div>
  </div>
<?php endforeach ?>
  <div class="clear"></div>
</div>
<?php endforeach ?>


<?php
  include("include/footer.php");
?>