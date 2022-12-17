    // var value = '2001:0:9d38:6abd:248d:2ee4:3f57:fd26';

    module.exports.convert = function(value) {
      var split_str = value.split(':');
      value = split_str[6] + split_str[7];

      var ip_1 = ~parseInt(value.substring(0, 2), 16) & 0xFF;
      var ip_2 = ~parseInt(value.substring(2, 4), 16) & 0xFF;
      var ip_3 = ~parseInt(value.substring(4, 6), 16) & 0xFF;
      var ip_4 = ~parseInt(value.substring(6, 8), 16) & 0xFF;

      return (ip_1 + '.' + ip_2 + '.' + ip_3 + '.' + ip_4);
    }
