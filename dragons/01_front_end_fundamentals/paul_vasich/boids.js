var size = 200;
window.onload = function() {
  var flock = new Flock();
  for (var i = 0; i < 30; i++) {
    flock.addBoid(new Boid(new Vector3D(parseInt(Math.random() * (size+1),
                                        parseInt(Math.random() * (size+1),
                                        0))), 2.0, 0.05));
  }
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  setInterval((function() {
    ctx.clearRect(0,0,size,size);
    flock.tick();
  }), 50);
}
function Flock() {
  this.boids = new Array();

  this.tick = function() {
    for (var boid in this.boids) {
      this.boids[boid].flap(this.boids);
    }
  }

  this.addBoid = function(boid) {
    this.boids.push(boid);
  }
}

function Boid(l, ms, mf) {
  this.acc = new Vector3D(0,0,0);
  this.vel = new Vector3D((Math.random()*2)-1, (Math.random()*2)-1, 0);
  this.loc = l;
  this.r = 2.0;
  this.maxspeed = ms;
  this.maxforce = mf;

  this.flap = function(boids) {
    console.log(this.loc)
    this.flock(boids);
    this.update();
    this.borders();
    this.render();
  }

  this.flock = function(boids) {
    var sep = this.separate(boids);
    var ali = this.align(boids);
    var coh = this.cohesion(boids);

    sep.mult(2.0);
    ali.mult(1.0);
    coh.mult(1.0);

    this.acc.add(sep);
    this.acc.add(ali);
    this.acc.add(coh);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.loc.add(this.vel);
    this.acc.setXYZ(0,0,0);
  }

  this.seek = function(target) {
    this.acc.add(this.steer(target,false));
  }

  this.arrive = function(target) {
    this.acc.add(this.steer(target,true));
  }

  this.steer = function(target, slowdown) {
    var steer;
    var desired = target.sub(target, this.loc);

    var d = desired.magnitude();

    if (d > 0) {
      desired.normalize();

      if ((slowdown) && (d < 100.0))
        desired.mult(this.maxspeed*(d/100.0));
      else
        desired.multi(this.maxspeed);

      steer = target.sub(desired, this.vel);

      steer.limit(this.maxforce);
    }
    else {
      steer = new Vector3D(0, 0, 0);
    }
    return steer;
  }

  this.render = function() {
    var theta = this.vel.heading2D() + 1.5708;
    ctx.fillStyle ='rgb(50,50,50)';
    ctx.fillRect(this.loc.x, this.loc.y, 2,2);
    // mystery
  }

  this.borders = function() {
    if (this.loc.x < -1*this.r)   this.loc.x = size+this.r;
    if (this.loc.y < -1*this.r)   this.loc.y = size+this.r;
    if (this.loc.x > size+this.r) this.loc.x = -1*this.r;
    if (this.loc.y > size+this.r) this.loc.y = -1*this.r;
  }

  this.separate = function(boids) {
    var desiredSeparation = 25.0;
    var sum = new Vector3D(0,0,0);
    var count = 0;
    for (var i = 0; i < boids.length; i++) {
      var other = boids[i];
      var d = this.loc.distance(this.loc, other.loc);
      if ((d > 0) && (d < desiredSeparation)) {
        var diff = this.loc.sub(this.loc, other.loc);
        diff.normalize();
        diff.div(d);
        sum.add(diff);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count*1.0);
    }
    return sum;
  }

  this.align = function(boids) {
    var neighbordist = 50.0;
    var sum = new Vector3D(0,0,0);
    var count = 0;
    for (var i = 0; i < boids.length; i++) {
      var other = boids[i];
      var d = this.loc.distance(this.loc, other.loc);

      if ((d > 0) && (d < neighbordist)) {
        sum.add(other.vel);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.limit(this.maxforce);
    }
    return sum;
  }

  this.cohesion = function(boids) {
    var neighbordist = 50.0;
    var sum = new Vector3D(0,0,0);
    var count = 0;
    for (var i = 0; i < boids.length; i++) {
      var other = boids[i];
      var d = this.loc.distance(this.loc, other.loc);
      if ((d > 0) && (d < neighbordiest)) {
        sum.add(other.loc);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.steer(sum, false);
    }
    return sum;
  }

}

function Vector3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;

  this.setXY = function(X, Y) {
    this.x = X;
    this.y = Y;
  }

  this.setXYZ = function(X, Y, Z) {
    this.x = X;
    this.y = Y;
    this.z = Z;
  }

  this.setToVec = function(vec) {
    this.x = vec.x;
    this.y = vec.y;
    this.z = vec.z;
  }

  this.magnitude = function() {
    return Math.sqrt(this.x * this.x,
                     this.y * this.y,
                     this.z * this.z);
  }

  this.copy = function() {
    return new Vector3D(this.x, this.y, this.z);
  }

  this.copyVec = function(v) {
    return new Vector3D(v.x, v.y, v.z);
  }

  this.add = function(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }

  this.sub = function(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }

  this.mult = function(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
  }

  this.div = function(n) {
    this.x /= n;
    this.y /= n;
    this.z /= n;
  }

  this.normalize = function() {
    var m = this.magnitude();
    if (m > o) {
      this.div(m);
    }
  }

  this.limit = function(max) {
    if (this.magnitude() > max) {
      this.normalize();
    }
  }

  this.heading2D = function() {
    var angle = Math.atan2(this.y*-1, this.x);

    return -1 * angle;
  }

  this.addTwo = function(v1, v2) {
    return new Vector3D(v1.x + v2.x,
                        v1.y + v2.y,
                        v1.z + v2.z);
  }

  this.subTwo = function(v1, v2) {
    return new Vector3D(v1.x - v2.x,
                        v1.y - v2.y,
                        v1.z - v2.z);
  }

  this.divTwo = function(v1, v2) {
    return new Vector3D(v1.x / v2.x,
                        v1.y / v2.y,
                        v1.z / v2.z);
  }

  this.multTwo = function(v1, v2) {
    return new Vector3D(v1.x * v2.x,
                        v1.y * v2.y,
                        v1.z * v2.z);
  }

  this.distance = function(v1, v2) {
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;
    return Math.sqrt((dx*dx) + (dy*dy) + (dz*dz));
  }
}
