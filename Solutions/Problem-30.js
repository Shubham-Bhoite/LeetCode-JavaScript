/* 30.Cache With Time Limit : 

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
The class has three public methods:

1) set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

2) get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

3) count(): returns the count of un-expired keys.

*/

var TimeLimitedCache = function() {
    this.cache = new Map();
    this.currentTime = 0;
};

TimeLimitedCache.prototype.setTime = function(time) {
    this.currentTime = time;
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const exists = this.cache.has(key) && this.cache.get(key).expiresAt > this.currentTime;
    this.cache.set(key, { value, expiresAt: this.currentTime + duration });
    return exists;
};

TimeLimitedCache.prototype.get = function(key) {
    const entry = this.cache.get(key);
    if (!entry || entry.expiresAt <= this.currentTime) {
        this.cache.delete(key); // clean up expired key
        return -1;
    }
    return entry.value;
};

TimeLimitedCache.prototype.count = function() {
    let count = 0;
    for (const [key, entry] of this.cache) {
        if (entry.expiresAt > this.currentTime) {
            count++;
        } else {
            this.cache.delete(key); // clean up expired keys
        }
    }
    return count;
};
