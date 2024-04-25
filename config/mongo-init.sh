set -e

mongo <<EOF
db.createUser({
  user: 'bot',
  pwd: 'mybotpass',
  roles: [
    {
      role: 'readWrite',
      db: 'bot'
    }
  ]
})
EOF
